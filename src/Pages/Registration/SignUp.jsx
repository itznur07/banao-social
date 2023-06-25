import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
// import useTitle from "../../Hooks/useTitle";
import login from "../../assets/login.svg";

const Signup = () => {
  const [show, setShow] = useState(false);
  // useTitle("Create an account");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = ({ email, password, name }) => {};

  return (
    <div className='flex  max-w-7xl mx-auto h-screen justify-center pb-3 items-center'>
      <div>
        <img className='max-w-xl md:block hidden' src={login} alt='login' />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='bg-white py-10 px-28 '
      >
        <h2 className='text-3xl text-center  font-semibold text-gray-800 mb-8'>
          Registration
        </h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            type='name'
            name='name'
            id='name'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#0A69DC]  focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
            })}
          />
          <br />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#0A69DC]  focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <br />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type={`${show === true ? "text" : "password"}`}
            name='password'
            id='password'
            className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#0A69DC]  focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: true,
            })}
          />
          <span
            onClick={() => setShow(!show)}
            className='absolute mt-3 mx-3 cursor-pointer text-[#0A69DC]'
          >
            <FaEye size={18}></FaEye>
          </span>
          <br />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='photo' className='block text-gray-700 font-bold mb-2'>
            PhotoURL
          </label>
          <input
            type='text'
            name='photo'
            id='photo'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-[#0A69DC]  focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.photo ? "border-red-500" : ""
            }`}
            {...register("photo", {
              required: "PhotoURL is required",
            })}
          />
          <br />
          {errors.photo && (
            <span className='text-red-500'>{errors.photo.message}</span>
          )}
        </div>
        <button
          type='submit'
          className='bg-[#0A69DC]  text-white w-full font-bold py-2 mt-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Signup
        </button>
        <div className='text-center mt-3 space-x-4 text-[#0A69DC]'>
          <button type='button' className='p-3 rounded bg-slate-100'>
            <FaFacebook />
          </button>
          <button type='button' className='p-3 rounded bg-slate-100'>
            <FaGoogle />
          </button>
          <button type='button' className='p-3 rounded bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          already signup?{" "}
          <Link to='/login'>
            <span className='text-[#0A69DC] font-medium'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
