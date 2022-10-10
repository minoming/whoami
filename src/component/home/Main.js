import Animation from "./Animation";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section class="flex-grow text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Animation></Animation>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요.
          </h1>
          <h1 class="title-font sm:text-3xl text-3xl mb-8 font-medium text-gray-900">
            눈에 보여지는 데이터를 만드는 개발자 미노미입니다.
          </h1>
          <p class="mb-20 leading-relaxed">
            넣는 따뜻한 노년에게서 위하여서. 몸이 더운지라 그림자는 보이는
            황금시대다. 그들은 트고, 유소년에게서 때문이다. 것은 불어 피가 있는
            따뜻한 꽃이 칼이다. 피가 위하여, 같이, 따뜻한 인간의 이것이다.
            더운지라 것이다.보라, 생생하며, 사람은 목숨을 아니다. 이상은 피부가
            풀이 그들은 것이다. 든 반짝이는 같이, 것이다. 맺어, 불어 가는 얼마나
            오직 봄바람이다. 사랑의 고행을 갑 대고, 평화스러운 자신과 것이다.
            얼음에 같이, 과실이 목숨을 청춘은 더운지라 사막이다.
          </p>
          <div class="flex justify-center">
          <Link to="/skils">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Skils
            </button>
            </Link>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
