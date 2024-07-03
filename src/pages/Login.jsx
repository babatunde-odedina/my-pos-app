import loginImage from '../assets/login.png';

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Image Section */}
      <div className='md:w-2/3 w-full bg-customBlue flex items-center justify-center'>
        <img src={loginImage} alt='Login' className='w-1/5 h-auto' />
      </div>

      {/* Login Form Section */}
      <div className='md:w-1/3 w-full bg-gray-100 flex flex-col justify-center p-8'>
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <form className='space-y-6 text-customFontColor'>
            <h5 className='font-sans text-custom-lg italic font-light leading-tight tracking-wide text-left'>
              Log In
            </h5>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <input
                type='password'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href='#'
                  className='text-sm text-blue-900 hover:text-blue-800'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type='submit'
              className='w-full py-2 px-4 bg-black italic text-white rounded-md hover:bg-indigo-700'
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
