

const Footer = () => {
  return (
    <footer className="footer rounded-b-lg p-10  bg-[#4287f5]">
      <aside>
        <img className="h-12 lg:h-16 w-12 lg:w-16 rounded-lg" src="https://i.ibb.co/kSyxD6z/final-study-group.jpg" alt="" />
        <p className="font-semibold">Online Study Group Ltd.<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <header className="text-xl font-semibold text-white">Services</header>
        <a className="link link-hover font-semibold">Branding</a>
        <a className="link link-hover font-semibold">Design</a>
        <a className="link link-hover font-semibold">Marketing</a>
        <a className="link link-hover font-semibold">Advertisement</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Company</header>
        <a className="link link-hover font-semibold">About us</a>
        <a className="link link-hover font-semibold">Contact</a>
        <a className="link link-hover font-semibold">Jobs</a>
        <a className="link link-hover font-semibold">Press kit</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Legal</header>
        <a className="link link-hover font-semibold">Terms of use</a>
        <a className="link link-hover font-semibold">Privacy policy</a>
        <a className="link link-hover font-semibold">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;