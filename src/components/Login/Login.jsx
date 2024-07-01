import style from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: 'iordakesky76@gmail.com',
      password: 'bebedede',
    },
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className={style.body}>
      <div className={style.con}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome back!</h1>
          <div className={style.pls}>
            <label>Please enter your details to proceed with the platform.</label>
          </div>
          <div className={style.box}>
            <label>Email</label>
            <input 
              type='email' 
              {...register('email', { required: 'Enter email' })} 
              className={errors.email ? style.error : ''} 
              helperText={errors.email?.message}
            />
          </div>
          <div className={style.box}>
            <label>Password</label>
            <input 
              type='password' 
              {...register('password', { required: 'Enter password' })} 
              className={errors.password ? style.error : ''} 
              helperText={errors.password?.message} 
              required
            />
          </div>
          <div className={style.forgot}>
            <a href='#'>Forgot password</a>
          </div>
          <button className={style.signin} type='submit'>Sign in</button>
        </form>
        <button className={style.goo}>Sign in with Google</button>
        <div className={style.noacc}>
          <p>Don't have an account? <a href='#'>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};
