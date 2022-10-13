import ApacheLogo from "./logos/ApacheLogo";
import DockerLogo from "./logos/DockerLogo";
import JavascriptLogo from "./logos/JavascriptLogo";
import BackboneLogo from "./logos/BackboneLogo";
import GruntLogo from "./logos/GruntLogo";
import JenkinsLogo from "./logos/JenkinsLogo";
import WebpackLogo from "./logos/WebpackLogo";
import KubernetesLogo from "./logos/KubernetesLogo";
import LesscssLogo from "./logos/LesscssLogo";
import LinuxLogo from "./logos/LunuxLogo";
import HtmlLogo from "./logos/HtmlLogo";
import NginxLogo from "./logos/NginxLogo";
import NpmLogo from "./logos/NpmLogo";
import ReactLogo from "./logos/ReactLogo";
import GradleLogo from "./logos/GradleLogo";
import YarnLogo from "./logos/YarnLogo";

export default function LogoBox() {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          BUSINESS
        </h2> */}
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>Basics</span>
        </h1>
        <div className="flex flex-row mt-3">
          <JavascriptLogo></JavascriptLogo>
          <HtmlLogo className="ml-5"></HtmlLogo>
          <LesscssLogo className="ml-5"></LesscssLogo>
        </div>
        <p className="text-xs text-gray-500 mt-5">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </section>
  );
}
