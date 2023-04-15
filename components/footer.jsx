import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-dblue2 foot bg-no-repeat min-h-[450px]">
      <div className="main pt-14">
        <h1 className="font-medium text-white text-4xl lg:text-6xl w-8/12 lg:w-5/12  lg:leading-[4.4rem]">
          What will you Build today?
        </h1>
        <p className="leading-[1.8rem]  w-8/12 lg:w-5/12  mt-[1.2rem]  text-white">
          Leverage our world-class engineering teams to get your ideas and
          projects up and running quickly.
        </p>
        <button className="flex items-center bg-white w-40 justify-center p-4  text-dblue2 text-base font-semibold my-8 rounded-full">
          Let&apos;s Talk
        </button>

        <footer className="mt-24">
          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold  text-white">Services</h5>

                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      Academy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="mb-2.5 font-bold  text-white">Company</h5>

                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      {" "}
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      {" "}
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="mb-2.5 font-bold  text-white">Contact us</h5>

                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!" className="text-white leading-[22px]">
                      Feel free to get in touch with us.
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      +234 (810) 759 5941
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white leading-[42px]">
                      {" "}
                      partnerships@enyata.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-6 col-span-2 lg:col-end-8 lg:col-span-2">
                <div>
                  <div className="flex gap-8">
                    <a
                      href="https://ng.linkedin.com/company/enyata"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6025 3.9375C5.6025 5.49113 4.35375 6.75 2.8125 6.75C1.27125 6.75 0.0225 5.49113 0.0225 3.9375C0.0225 2.385 1.27125 1.125 2.8125 1.125C4.35375 1.125 5.6025 2.385 5.6025 3.9375ZM5.625 9H0V27H5.625V9ZM14.6048 9H9.01575V27H14.6059V17.5511C14.6059 12.2974 21.3885 11.8676 21.3885 17.5511V27H27V15.6026C27 6.73763 16.9628 7.0605 14.6048 11.4244V9Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/enyatahq/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M27.728 8.176c-.065-1.477-.304-2.493-.646-3.373a6.785 6.785 0 0 0-1.608-2.466 6.843 6.843 0 0 0-2.46-1.602C22.128.392 21.118.154 19.64.088 18.152.018 17.68.001 13.905.001c-3.775 0-4.248.017-5.73.082-1.478.065-2.493.304-3.373.646a6.784 6.784 0 0 0-2.466 1.608 6.846 6.846 0 0 0-1.603 2.46c-.342.886-.58 1.896-.646 3.374C.017 9.659 0 10.13 0 13.906c0 3.775.016 4.248.081 5.73.066 1.478.305 2.494.647 3.374.353.934.901 1.77 1.608 2.466a6.844 6.844 0 0 0 2.46 1.602c.886.342 1.896.581 3.373.646 1.483.066 1.956.082 5.73.082 3.776 0 4.248-.016 5.731-.082 1.477-.065 2.493-.304 3.373-.646a7.112 7.112 0 0 0 4.068-4.068c.342-.886.581-1.896.647-3.373.065-1.483.081-1.956.081-5.73 0-3.776-.005-4.248-.07-5.73Zm-2.503 11.352c-.06 1.358-.288 2.091-.479 2.58a4.612 4.612 0 0 1-2.64 2.64c-.488.19-1.227.418-2.58.478-1.466.065-1.906.081-5.615.081-3.71 0-4.156-.016-5.617-.081-1.358-.06-2.091-.288-2.58-.478a4.278 4.278 0 0 1-1.597-1.038 4.323 4.323 0 0 1-1.037-1.596c-.19-.49-.419-1.228-.478-2.58-.065-1.467-.082-1.907-.082-5.617s.017-4.155.082-5.616c.06-1.358.288-2.091.478-2.58a4.226 4.226 0 0 1 1.043-1.597c.45-.462.994-.815 1.597-1.037.488-.19 1.227-.419 2.58-.478 1.466-.065 1.906-.082 5.616-.082 3.715 0 4.155.017 5.616.082 1.358.06 2.091.288 2.58.478a4.275 4.275 0 0 1 1.597 1.037c.462.45.815.994 1.038 1.597.19.489.418 1.227.478 2.58.065 1.467.081 1.906.081 5.616s-.016 4.145-.081 5.611Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M13.905 6.763a7.144 7.144 0 0 0-7.143 7.143c0 3.943 3.2 7.142 7.143 7.142 3.943 0 7.142-3.199 7.142-7.142 0-3.944-3.199-7.143-7.142-7.143Zm0 11.776a4.634 4.634 0 1 1 .001-9.268 4.634 4.634 0 0 1-.001 9.268ZM22.997 6.481a1.668 1.668 0 1 1-3.335 0 1.668 1.668 0 0 1 3.335 0Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/EnyataHQ"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="23"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M28.435 2.651c-1.024.45-2.116.748-3.254.892A5.616 5.616 0 0 0 27.665.422a11.288 11.288 0 0 1-3.581 1.367 5.646 5.646 0 0 0-9.77 3.862c0 .448.038.878.13 1.288-4.695-.23-8.85-2.48-11.64-5.908a5.686 5.686 0 0 0-.774 2.855A5.656 5.656 0 0 0 4.54 8.58a5.578 5.578 0 0 1-2.552-.696v.062a5.674 5.674 0 0 0 4.525 5.55c-.46.125-.96.186-1.48.186-.362 0-.727-.021-1.07-.097.732 2.237 2.809 3.881 5.278 3.935a11.348 11.348 0 0 1-7.003 2.409c-.463 0-.908-.021-1.352-.078a15.9 15.9 0 0 0 8.665 2.535c10.393 0 16.075-8.61 16.075-16.072 0-.25-.009-.49-.02-.73a11.267 11.267 0 0 0 2.83-2.933Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/Enyata.Community/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="24"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M9.954 3.83h2.105V.164C11.696.114 10.447 0 8.992 0c-3.035 0-5.114 1.91-5.114 5.418v3.23H.53v4.098h3.35V23.06h4.105V12.748h3.214l.51-4.099H7.983V5.826c.001-1.185.32-1.996 1.97-1.996Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 py-14">
          <div className="h-auto relative">
         <Image  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '80%', height: 'auto' }} src="https://www.enyata.com/static/media/enyata-footer-logo-white.c14f8c3f4750a869e0c5c889e0e3f221.svg" alt="" />
           </div>
           <div className="sm:col-span-2 lg:col-span-2 ">
            <p className="text-white  font-medium">Copyright © Enyata 2022</p>
           </div>
           <div>
            <a
              className="text-white"
              href="https://tailwind-elements.com/"
            >
Privacy Policy
            </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
