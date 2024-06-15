import style from './Login.module.css' 

export function Login(){
  return <div>
    <body className={style.body}>
      <div class='con' className={style.con}>
        <form action=''>
          <h1>Welcome back!</h1>
          <div class='pls' className={style.pls}>
            <label>Please enter your detalis to processed with the platform.</label>
          </div>
          <div class='box' className={style.box}>
            <label>Email</label>
            <input type='email' requreired></input>
          </div>
          <div class='box' className={style.box}>
            <label>Password</label>
            <input type='password' requreired></input>
          </div>
          <div class='forgot' className={style.forgot}>
            <a href='#'>Forgot password</a>
          </div>
          <button class='signin' className={style.signin}>Sign in</button>
          <button class='goo' className={style.goo}>Sign in with Google</button>
          <div class='noacc' className={style.noacc}>
            <p>Don't have account? <a href='#'>Sign up</a></p>
          </div>
        </form>
      </div>
    </body>
  </div>
}