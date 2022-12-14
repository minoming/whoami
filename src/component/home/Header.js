import { Link } from "react-router-dom";
import { I18n, changeLocale } from "../../locale/I18n";

const _changeLocale = (e) => {
  const locale = e.target.value;
  changeLocale(locale);
};

function Header(props) {
  const korean = I18n("한국어");
  const english = I18n("영어");
  const title = I18n(props.title);
  const who = I18n("who");
  const skils = I18n("skils");
  const projects = I18n("projects");

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link to="/" className="ml-3 text-xl">
            {title}
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/info" className="mr-5 hover:text-gray-900">
            {who}
          </Link>
          <Link to="/skils" className="mr-5 hover:text-gray-900">
            {skils}
          </Link>
          <Link to="/projects" className="mr-5 hover:text-gray-900">
            {projects}
          </Link>
        </nav>
        <div className="relative">
          <select
            onChange={_changeLocale}
            className="rounded border appearance-none border-gray-300 py-1 mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
          >
            <option value="en">{english}</option>
            <option value="ko">{korean}</option>
          </select>
          <span className="absolute right-0 top-0 h-full w-10 mr-4 text-center text-gray-600 pointer-events-none flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </div>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
