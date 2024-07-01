import style from './Signup.module.css' 

export function Signup(){
  return <div>
    <body className={style.body}>
      <div class='con' className={style.con}>
        <form action=''>
          <h1>Welcome!</h1>
          <div class='pls' className={style.pls}>
            <label>Please enter your detalis to processed with the platform.</label>
          </div>
          <div className={style.box}>
            <label>Username</label>
            <input type='fname'></input>
          </div>
          <div class='box' className={style.box}>
            <label>Email</label>
            <input type='email' requreired></input>
          </div>
          <div class='box' className={style.box}>
            <label>Password</label>
            <input type='password' requreired></input>
          </div>
          <button class='signin' className={style.signin}>Sign up</button>
          <button class='goo' className={style.goo}>Sign up with Google</button>
          <div class='noacc' className={style.noacc}>
            <p>Have account? <a href='#'>Sign in</a></p>
          </div>
        </form>
      </div>
    </body>
  </div>
}
