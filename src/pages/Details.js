import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { update, emailVerification } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon } from "icons";
import { toast } from "react-hot-toast";

export default function Details() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const displayName = name + " " + surname;

  if (user.displayName) {
    document.getElementById("verify").classList.replace("hidden", "flex");
    document.getElementById("fullName").classList.add("hidden");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await update({
      displayName,
    });
    if (response === true) {
      document.getElementById("verify").classList.replace("hidden", "flex");
      document.getElementById("fullName").classList.add("hidden");
      emailVerification();
    } else {
      toast.error("Bir hata oluştu");
    }
  };

  const resendVerification = async () => {
    await emailVerification();
    toast.success("Doğrulama e-postası gönderildi.");
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-[350px] shadow-wrapperFocus p-3 md:p-6 rounded-lg">
          <div>
            <h1 className="font-semibold text-3xl text-black">Hoş Geldiniz</h1>
            <p className="flex gap-x-1 items-center my-3 text-gray-600 text-base font-medium">
              <FaUserCircle size={20} />
              <span className="mb-[2px]">
                {user.displayName ? user.displayName : user.email}
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit} id="fullName">
            <label className="block relative">
              <input
                type="text"
                required={true}
                className="text-xl text-black w-full block h-14 pt-7 px-3 pb-[10px] border border-black border-opacity-60 rounded outline-0 peer focus:shadow-inputFocus focus:border-[#0a66c2]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="text-xl font-medium text-black text-opacity-60 absolute top-1/2 left-0 -translate-y-1/2 pl-[13px] cursor-text pointer-events-none select-none peer-valid:top-4 peer-focus:top-4 peer-focus:text-base  peer-valid:text-base transition-all">
                Ad
              </span>
            </label>
            <label className="block relative mt-3">
              <input
                type="text"
                required={true}
                className="text-xl text-black w-full block h-14 pt-7 px-3 pb-[10px] border border-black border-opacity-60 rounded outline-0 peer focus:shadow-inputFocus focus:border-[#0a66c2]"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <span className="text-xl font-medium text-black text-opacity-60 absolute top-1/2 left-0 -translate-y-1/2 pl-[13px] cursor-text pointer-events-none select-none peer-valid:top-4 peer-focus:top-4 peer-focus:text-base peer-valid:text-base transition-all">
                Soyad
              </span>
            </label>

            <button
              className="w-full h-14 mt-4 rounded-lg bg-brand text-white text-lg font-medium cursor-pointer hover:bg-[#095eb3] focus:bg-[#095eb3] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              type="submit"
              disabled={!name || !surname}
            >
              Devam
            </button>
          </form>
          <div
            className="hidden flex-col justify-center items-center gap-y-3"
            id="verify"
          >
            <div>
              <h1 className="font-semibold text-2xl text-black">
                E-posta adresinize tek seferlik bir link gönderdik
              </h1>
              <p className="font-normal text-base text-black text-opacity-90 mt-2">
                Hesabınızda hemen oturum açmak için linki tıklayın.
              </p>
            </div>
            <div>
              <MailIcon size={64} />
            </div>
            <p className="text-base tracking-tight font-normal text-black text-opacity-80">
              E-postayı gelen kutunuzda göremiyorsanız, spam dosyanızı kontrol
              edin.
            </p>
            <button
              onClick={resendVerification}
              className="w-full h-10 rounded-3xl shadow-button flex items-center justify-center gap-x-2 hover:shadow-buttonHover hover:bg-gray-100 focus:bg-gray-100 focus:shadow-buttonHover"
            >
              E-postayı yeniden gönder
            </button>
            <div>
              <Link
                to="/"
                className=" h-10 rounded-3xl px-3 shadow-button flex items-center transition-all justify-center gap-x-2 hover:shadow-inputFocus hover:bg-[#d0e8ff] focus:bg-[#d0e8ff] focus:shadow-inputFocus"
              >
                Doğruladım
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
