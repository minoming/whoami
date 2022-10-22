export default function Info() {
  return (
    <section class="flex-grow text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <div class="container px-5 py-20 mx-auto flex flex-col">
            <div class="lg:w-4/6 ">
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      미노미
                    </h2>
                    <h3 className="text-gray-500 text-sm">FE개발자</h3>
                    <div class="w-14 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p class="text-base">미라콤) 연구소, 솔루션랩</p>
                    <p class="text-base">미라콤) FE개발 및 Devops 관리</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">Miracom UI Framework 개발</p>
                  <p class="leading-relaxed text-lg mb-4">Nexplant MESplus SR 개발 (데이터 리포트)</p>
                  <p class="leading-relaxed text-lg mb-4">UI통합 플랫폼 코어 및 공통 기능 개발</p>
                  <p class="leading-relaxed text-lg mb-4">전사 개발 환경 CI/CD 운영 및 관리</p>
                  <a class="text-indigo-500 inline-flex items-center cursor-pointer">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
