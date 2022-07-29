import { useState } from "react";
import { register } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    if (!user.displayName || user.displayName === null) {
      navigate("/details", { state: { user } });
    } else {
      navigate("/", { state: { user } });
    }
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-[350px] shadow-wrapperFocus p-3 md:p-6 rounded-lg">
          <div>
            <h1 className="font-semibold text-3xl text-black">
              Hesabınızı oluşturun
            </h1>
            <p className="text-base my-3 text-black text-opacity-70">
              E-posta ya da Google, Apple hesaplarından biriyle hesap aç.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="block relative">
              <input
                type="text"
                required={true}
                className="text-xl text-black w-full block h-14 pt-7 px-3 pb-[10px] border border-black border-opacity-60 rounded outline-0 peer focus:shadow-inputFocus focus:border-[#0a66c2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <span className="text-xl font-medium text-black text-opacity-60 absolute top-1/2 left-0 -translate-y-1/2 pl-[13px] cursor-text pointer-events-none select-none peer-valid:top-4 peer-focus:top-4 peer-focus:text-base peer-valid:text-base transition-all">
                E-posta
              </span>
            </label>
            <label className="block relative mt-3">
              <input
                type="password"
                required={true}
                className="text-xl text-black w-full block h-14 pt-7 px-3 pb-[10px] border border-black border-opacity-60 rounded outline-0 peer focus:shadow-inputFocus focus:border-[#0a66c2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-xl font-medium text-black text-opacity-60 absolute top-1/2 left-0 -translate-y-1/2 pl-[13px] cursor-text pointer-events-none select-none peer-valid:top-4 peer-focus:top-4 peer-focus:text-base peer-valid:text-base transition-all">
                Şifre
              </span>
            </label>
            <Link
              to="/forget-password"
              className="text-lg font-medium text-brand inline-block px-2 my-3 h-8 rounded-3xl hover:bg-[#d0e8ff] hover:underline transition-colors focus:shadow-inputFocus focus:bg-[#d0e8ff] focus:underline"
            >
              Şifrenizi mi unuttunuz?
            </Link>
            <button
              className="w-full h-14 rounded-lg bg-brand text-white text-lg font-medium cursor-pointer hover:bg-[#095eb3] focus:bg-[#095eb3] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              type="submit"
              disabled={!email || !password || password.length < 6}
            >
              Hesap Oluştur
            </button>
          </form>
          <div>
            <div className="flex items-center m-3">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-base font-medium text-black text-opacity-60">
                ya da
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
          </div>
          <div className="flex gap-y-3 flex-col">
            <button className="w-full h-10 rounded-3xl shadow-button flex items-center justify-center gap-x-2 hover:shadow-buttonHover hover:bg-gray-100 focus:bg-gray-100 focus:shadow-buttonHover">
              <FcGoogle size={22} />
              <span className="text-black text-opacity-60 font-medium text-base">
                Google ile oturum açın
              </span>
            </button>
            <button className="w-full h-10 rounded-3xl shadow-button flex items-center justify-center gap-x-2 hover:shadow-buttonHover hover:bg-gray-100 focus:bg-gray-100 focus:shadow-buttonHover">
              <AiFillApple size={24} />
              <span className="text-black text-opacity-60 font-medium text-base">
                Apple ile oturum açın
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center my-3">
          <span>Hesabın var mı?</span>
          <Link
            to="/login"
            className="text-lg font-medium text-brand inline-block px-2 rounded-3xl hover:bg-[#d0e8ff] hover:underline transition-colors focus:shadow-inputFocus focus:bg-[#d0e8ff] focus:underline"
          >
            Giriş yap
          </Link>
        </div>
      </div>
    </>
  );
}
