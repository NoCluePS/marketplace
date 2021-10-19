import React, { useState, useEffect, MouseEventHandler } from 'react';

import { Formik } from 'formik';
import { FormInput } from '../FormInput';
import { ImCross } from 'react-icons/im';
import { ReserveTrade } from '../../utils';
import { useRecoilState, useRecoilValue } from 'recoil';
import { broadcastState, prefixState, userState } from '../../atoms';

export const ReserveNFTForm: React.FC<{
  set: string;
  uid: string;
  handleClose: Function;
}> = ({ set, handleClose, uid }) => {
  const user: any = useRecoilValue(userState);
  const prefix: string = useRecoilValue(prefixState);
  const [_broadcasts, setBroadcasts] = useRecoilState<any>(broadcastState);
  const [reserveData, setReserveData] = useState<{
    set: string;
    uid: string;
    to: string;
    price: number;
  }>();

  useEffect(() => {
    if (reserveData) {
      ReserveTrade(user.name, prefix, reserveData).then((response: any) => {
        response &&
          response.success &&
          setBroadcasts((prevState: any) => [...prevState, response]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reserveData]);

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-700 bg-opacity-50 z-50">
      <div className="p-8 bg-gray-700 rounded-xl border-4 border-gray-800 relative">
        <button className="m-2 absolute top-0 right-0">
          <ImCross
            size={15}
            color="#fff"
            opacity={100}
            onClick={handleClose as MouseEventHandler}
          />
        </button>
        <h1 className="text-center text-white text-2xl mb-3">
          Reserve transfer
        </h1>
        <Formik
          initialValues={{ price: 1000, to: '' }}
          validate={({ price, to }) => {
            const errors: any = {};
            if (!price) {
              errors.price = 'Required';
            } else if (!to) {
              errors.to = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setReserveData({
              price: values.price,
              to: values.to,
              set,
              uid,
            });
            setSubmitting(false);
            handleClose();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center gap-5 text-white text-center">
                <FormInput
                  name="to"
                  errors={errors.to}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched.to}
                  value={values.to}
                />
                <div className="flex gap-5">
                  <div className="text-white">
                    <FormInput
                      type="number"
                      name="price"
                      errors={errors.price}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      touched={touched.price}
                      value={values.price}
                    />
                    <p>Percision: 3, in DLUX</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-lg border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700"
                >
                  Reserve
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
