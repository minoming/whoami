import Animation from "./Animation";
import { Link } from "react-router-dom";
import { I18n } from "../../locale/I18n";

function Main(props) {
  return (
    <section class="flex-grow text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Animation></Animation>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {I18n("LMM0001")}
          </h1>
          <h1 class="title-font sm:text-3xl text-3xl mb-8 font-medium text-gray-900">
            {I18n("LMM0002")}
          </h1>
          <p class="leading-relaxed text-xl mb-6 text-red-600 bg-gray-50">
            {I18n("LMM0003")} <br></br> {I18n("LMM0004")}
          </p>
          <p class="mb-20 leading-relaxed">
            {I18n("LMM0005")}
          </p>
          <div class="flex justify-center">
          <Link to="/skils">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {I18n("skils")}
            </button>
            </Link>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              {I18n("projects")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
