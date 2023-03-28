import Head from "next/head";
import data from "../data/linkData.json";
import Image from "next/image";
import { ShareSocial } from "react-share-social";
import { ShareNetwork } from "@phosphor-icons/react";
import { Popover } from "@headlessui/react";
import motogeekLogo from "../public/Motogeek Logo.png";

const style = {
  root: {
    borderRadius: 10,
    border: 0,
  },
};

export default function Home({ jsonItems }) {
  return (
    <div>
      <Head>
        <title>MotoGeek</title>
      </Head>

      <div className="flex justify-center m-10 flex-col items-center gap-2">
        <Image
          src={motogeekLogo}
          alt="Motogeek logo"
          height={80}
          width={160}
          className="rounded"
        />

        <article className="prose text-center mb-4">
          <h2>MotoGeek</h2>
          <h4>
            The products listed on this page contain affiliate links.It won't
            cost you extra
          </h4>
        </article>

        <div className="max-w-max flex flex-col gap-3 mb-20">
          {jsonItems.map((item, index) => (
            <div
              className="alert shadow-lg transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-20 hover:bg-white hover:text-gray-900 duration-200"
              key={index}
            >
              <a href={item.link} target="_blank" className="w-full">
                <div className="text-center flex justify-center items-center gap-3">
                  <img
                    src={item.imageUrl}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <span>{item.name}</span>
                </div>
              </a>
              <Popover className="relative">
                <Popover.Button>
                  <ShareNetwork size={32} />
                </Popover.Button>
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen mb-20 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <ShareSocial
                    title={"Share this link"}
                    url={item.link}
                    socialTypes={[
                      "facebook",
                      "twitter",
                      "reddit",
                      "linkedin",
                      "whatsapp",
                    ]}
                    onSocialButtonClicked={(data) => console.log(data)}
                    style={style}
                  />
                </Popover.Panel>
              </Popover>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0">
        <div className="items-center grid-flow-col">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { jsonItems: data },
  };
}
