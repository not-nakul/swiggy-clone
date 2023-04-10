import WideContainer from "./UI/WideContainer";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <WideContainer className="flex justify-between p-16">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-3xl font-bold select-none">🥗🍴</h1>

          <hr className="w-full"></hr>

          <div className="flex gap-4 items-center">
            <img
              className="w-6"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
            />
            <img
              className="w-6"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
            />
            <img
              className="w-6"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
            />
            <img
              className="w-6"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
            />
          </div>
        </div>

        <ul className="flex flex-col gap-6 font-semibold text-center">
          <li className="hover:text-orange-400 cursor-pointer">About Us</li>
          <li className="hover:text-orange-400 cursor-pointer">Our Team</li>
          <li className="hover:text-orange-400 cursor-pointer">Careers</li>
          <li className="hover:text-orange-400 cursor-pointer">Partner Us</li>
        </ul>

        <ul className="flex flex-col gap-6 font-semibold text-center">
          <li className="hover:text-orange-400 cursor-pointer">
            Help & Support
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Terms & Conditions
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Refund & Cancellation
          </li>
        </ul>
      </WideContainer>
    </footer>
  );
}

export default Footer;
