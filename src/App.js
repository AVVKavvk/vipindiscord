import "../src/index.css";
import logo from "./images/logo.svg";
import img1 from "./images/Image0.svg";
import img2 from "./images/Image1.svg";
import img3 from "./images/Image2.svg";
import simg1 from "./images/section1Image.svg";
import simg2 from "./images/section2Image.svg";
import simg3 from "./images/section3Image.svg";
import simg4 from "./images/section4Image.svg";
import simg5 from "./images/section5Image.svg";
import twii from "./images/twitter-icon.svg";
import fbi from "./images/facebook-icon.svg";
import insi from "./images/instagram-icon.svg";
import giti from "./images/github-icon.svg";

function App() {
  return (
    <>
     
     
      <div class="bg-[#404EED] font-ggSans">
        
        <nav
          class="text-[#fff]  max-w-[1200px] mx-auto 
        flex justify-between h-[72px] items-center xl:px-0 px-7"
        >
          {/* <!-- Logo --> */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* <!-- Nav Options --> */}
          <div class="hidden md:flex gap-5 font-ggSans font-[600] font-[16px]">
            <a href="#" class="capitalize hover:underline">
              download
            </a>
            <a href="#" class="capitalize hover:underline">
              nitro
            </a>
            <a href="#" class="capitalize hover:underline">
              discover
            </a>
            <a href="#" class="capitalize hover:underline">
              safety
            </a>
            <a href="#" class="capitalize hover:underline">
              support
            </a>
            <a href="#" class="capitalize hover:underline">
              blog
            </a>
            <a href="#" class="capitalize hover:underline">
              careers
            </a>
          </div>
          {/* <!-- Open DiscordBtn --> */}
          <div class="flex sm:hidden  lg:flex">
            <a href="#">
              <button
                class="bg-[#fff] px-4 self-center p-2 text-[#2c2f33] 
              rounded-full font-[500] text-[14px]"
              >
                Open Discord
              </button>
            </a>
          </div>

          {/* <!-- Humbarget Option --> */}
          <div class="xl:hidden block">
            <i class="fa-solid fa-bars text-[23px]"></i>
          </div>
        </nav>
      </div>


      <div class="bg-[#404EED] -mt-1 relative w-full overflow-x-hidden">
        <img
          src={img1}
          class="hidden xl:block absolute z-10 bottom-0 top-auto scale-x-125"
          alt=""
        />
        <img
          src={img2}
          class="hidden xl:block absolute z-10 bottom-0 -right-[5%]"
          alt=""
        />
        <img
          src={img3}
          class="hidden xl:block absolute z-10 bottom-0 -left-[5%]"
          alt=""
        />
        <div
          class="text-[#fff] container max-w-[1200px] xl:px-0 px-7 xl:max-w-[900px] 
            mx-auto text-center xl:h-[555px] flex flex-col gap-5 pt-[50px] xl:pt-[120px]"
        >
          <h2
            class="font-[800] text-left xl:text-center text-[34px] md:text-[56px]
             font-['GintoNord'] z-20"
          >
            IMAGINE A PLACE...
          </h2>

          <p
            class="font-[400] text-left xl:text-center 
              text-[16px] md:text-[20px] leading-[26px] 
              md:leading-[32.5px] font-['gg sans'] w-[90%] md:w-[70%] xl:w-[90%] z-20 xl:self-center"
          >
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>

          <div class="hidden xl:flex flex-row item-center justify-center gap-10 font-[500] z-20">
            <a
              href="#"
              class="bg-white text-black p-3 px-7 rounded-full hover:text-[#404EED]"
            >
              <p>
                <i class="fa-solid fa-download mr-2"></i>
                Download for Windows
              </p>
            </a>
            <a href="#" class="bg-[#23272a] text-white p-3 px-7 rounded-full">
              Open Discord in your browser
            </a>
          </div>

          {/* <!-- Mobile/Tablet Mode Start --> */}
          <div class="flex xl:hidden font-[500] z-20">
            <a
              href="#"
              class="bg-white text-black p-3 px-7 rounded-full hover:text-[#404EED]"
            >
              <p>
                <i class="fa-solid fa-download mr-2"></i>
                Download from Google Play
              </p>
            </a>
          </div>

          <img src={img3} class="block md:hidden ml-[-80px]" alt="" />

          <div class="hidden md:flex xl:hidden mr-[-150px] mt-[-16%] justify-end">
            <img src={img2} class="w-[70%]" alt="" />
          </div>

          
        </div>
      </div>

      {/* <!-- section 1 --> */}
      <div
        class="flex container max-w-[1200px] mx-auto 
    items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0"
      >
       
        <div class="md:w-[50%]">
          <img src={simg1} alt="" />
        </div>

        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px]
               md:text-[48px] font-['ggSans'] leading-[24px]
                md:leading-[57.6px] mt-5 md:mt-0"
            >
              Create an invite-only place where you belong
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Section 2 --> */}

      <div class="flex container max-w-[1200px] mx-auto items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">
        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1 class="font-[700] text-[20px] sm:text-[28px] md:text-[48px] font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0">
              Where hanging out is easy
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
        <div class="md:w-[50%]">
          <img src={simg2} alt="" />
        </div>
      </div>

      {/* <!-- Section 3 --> */}
      <div class="flex container max-w-[1200px] mx-auto items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">
        <div class="md:w-[50%]">
          <img src={simg3} alt="" />
        </div>
        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1 class="font-[700] text-[20px] sm:text-[28px] md:text-[48px] font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0">
              From few to a fandom
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>

      {/* <!--section - 4--> */}
      <div class="bg-[#f6f6f6]">
        <div class="flex flex-col container max-w-[1200px] mx-auto items-center py-14 md:py-32 px-5">
          <h1
            class="font-[800] font-['GintoNord'] text-[20px] 
        leading-[19px] md:leading-[32px] text-left md:text-center md:text-[40px]"
          >
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p
            class="md:text-center md:w-[83%] md:text-[20px] 
      md:leading-[32.5px] text-[16px] leading-[26px] mt-[24px]"
          >
            Low-latency voice and video feels like you&apos;re in the same room.
            Wave hello over video, watch friends stream their games, or gather
            up and have a drawing session with screen share.
          </p>
          <img src={simg4} alt="" class="w-[100%]" />

          <div
            class="text-[32px] font-['ggSans'] font-[700] relative 
      w-[100%] flex flex-col items-center gap-[40px]"
          >
            <img src={simg5} class="md:block hidden absolute top-0" alt="" />
            <div class="md:text-center pt-[30px] leading-[38px]">
              Ready to start your journey?
            </div>

            <p
              class="bg-[#404EED] hidden md:block w-fit text-white text-[20px] 
          font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-full"
            >
              <i class="fa-solid fa-download mr-2"></i>
              Download for Windows
            </p>
          </div>
          <div
            class="bg-[#404EED] md:hidden flex justify-center items-center mt-4
         text-white text-[20px] font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-3xl"
          >
            <i class="fa-solid fa-download mr-2"></i>
            <p>Download from Google Play</p>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div class="bg-[#23272a]">
        <div class="container text-[#5865f2] max-w-[1200px] mx-auto pt-24 flex flex-col gap-10 pb-10">
          {/* <!-- Section 1 --> */}
          <div class="flex xl:gap-[100px] gap-[40px] flex-col md:flex-row px-5">
            {/* <!-- Left Section --> */}
            <div class="flex flex-col gap-[24px] w-[100%] md:w-[50%] xl:w-[20%]">
              <h1 class="font-[800] font-['GintoNord'] text-[32px] leading-[30.4px]">
                IMAGINE A
                <br />
                PLACE
              </h1>
              <div class="text-white text-[23px] flex gap-7">
                <a href="#">
                  <img src={twii} alt="" />
                </a>
                <a href="#">
                <img src={insi} alt="" />
                </a>
                <a href="#">
                <img src={fbi} alt="" />
                </a>
                <a href="#">
                <img src={giti} alt="" />
                </a>
              </div>
            </div>

            {/* <!-- Right Section -->/ */}
            <div class="md:w-[75%] flex justify-around flex-wrap">
              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Product
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline">
                    <a href="#">Download</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Nitro</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Company
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline">
                    <a href="#">About</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Jobs</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Branding</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Newsroom</a>
                  </li>
                  <li class="hover:underline text-[#1f1f1f00] select-none">
                    <a href="#">.</a>
                  </li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Resources
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline">
                    <a href="#">Colleges</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Support</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Safety</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Blog</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Feedback</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Developers</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">StreamKit</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Creators</a>
                  </li>
                </ul>
              </div>

              <div class="w-[50%] xl:w-fit">
                <h2 class="text-[16px] font-['ggSans'] xl:py-[10px] py-[15px]">
                  Policies
                </h2>
                <ul class="text-white flex flex-col gap-[10px] leading-[24px] font-[400] font-['ggSans']">
                  <li class="hover:underline">
                    <a href="#">Terms</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Privacy</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Cookie Settings</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Guidelines</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Acknowledgements</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Licenses</a>
                  </li>
                  <li class="hover:underline">
                    <a href="#">Moderation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Section 2 --> */}
          <div class="flex border-t-2 border-[#5865f2] items-center justify-between pt-7 mx-5">
          
          </div>
        </div>
      </div>

      {/* <script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script> */}
    </>
  );
}

export default App;
