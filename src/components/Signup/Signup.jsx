import style from './Signup.module.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';


export const Signup = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: 'test',
      email: 'test@gmail.com',
      password: '123456',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values));
      console.log('Response data:', data);

      if (!data.payload) {
        alert('Failed to register');
        return;
      }

      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      } else {
        alert('No token provided');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.code === 11000) {
        setError('email', {
          type: 'manual',
          message: 'Email already in use',
        });
      } else {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again.');
      }
    }
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className={style.body}>
      <div className={style.con}>
        <h1>Welcome!</h1>
        <div className={style.pls}>
          <label>Please enter your details to proceed with the platform.</label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.box}>
            <label>Username</label>
            <input 
              type='text' 
              {...register('fullName', { required: 'Enter full name' })} 
              className={errors.fullName ? style.error : ''} 
            />
            {errors.fullName && <span className={style.errorMessage}>{errors.fullName.message}</span>}
          </div>
          <div className={style.box}>
            <label>Email</label>
            <input 
              type='email' 
              {...register('email', { 
                required: 'Enter email',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })} 
              className={errors.email ? style.error : ''} 
            />
            {errors.email && <span className={style.errorMessage}>{errors.email.message}</span>}
          </div>
          <div className={style.box}>
            <label>Password</label>
            <input 
              type='password' 
              {...register('password', { 
                required: 'Enter password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })} 
              className={errors.password ? style.error : ''} 
            />
            {errors.password && <span className={style.errorMessage}>{errors.password.message}</span>}
          </div>
          <button disabled={!isValid} type='submit' className={style.signin}>Sign up</button>
        </form>
        <button className={style.goo}>Sign up with Google</button>
        <div className={style.noacc}>
          <p>Have an account? <a href='#'>Sign in</a></p>
        </div>
      </div>
    </div>
  );
}
