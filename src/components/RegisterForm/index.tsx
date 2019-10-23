import React, { memo } from 'react';
import useForm from 'react-hook-form';
import { FieldValues, OnSubmit } from 'react-hook-form/dist/types';

const RegisterFormComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit: OnSubmit<FieldValues> = (data) => { console.log(data); };
  console.log(watch('example'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input name='example' defaultValue='test' ref={register} />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type='submit' />
    </form>
  );
};
const RegisterForm = memo(RegisterFormComponent);
export default RegisterForm;
