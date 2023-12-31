export function Menu({ closeMenu }) {
  const handleMenuClick = () => {
    // Call the closeMenu function to set isOpen to false
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-screen lg:w-[50vw] bg-[#c7eeff] z-[10] transform -translate-x-full will-change-transform">
      <ul className="flex flex-col text-center h-screen justify-center items-center ">
        <li className=" transform-origin-left font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#hero">
            Home
          </a>
        </li>
        <li className="origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#skills">
            Skills
          </a>
        </li>
        <li className="origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#experiences">
            Experiences
          </a>
        </li>
        <li className="origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#projects">
            Projects
          </a>
        </li>
        <li className=" origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#certifications">
            Certifications
          </a>
        </li>
        <li className="origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#educations">
            Educations
          </a>
        </li>
        <li className=" origin-center font-normal my-4 text-4xl will-change-transform will-change-opacity will-change-filter">
          <a onClick={handleMenuClick} href="#achievements">
            Achievements
          </a>
        </li>
      </ul>
    </nav>
  );
}
