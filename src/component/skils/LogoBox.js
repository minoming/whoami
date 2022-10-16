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

export default function LogoBox(props) {

  const _logoComponents = {
    "html": HtmlLogo,
    "js": JavascriptLogo,
    "less": LesscssLogo,
    "backbone": BackboneLogo,
    "react": ReactLogo,
    "grunt": GruntLogo,
    "gradle": GradleLogo,
    "npm": NpmLogo,
    "yarn": YarnLogo,
    "webpack": WebpackLogo,
    "linux": LinuxLogo,
    "docker": DockerLogo,
    "kubernetes": KubernetesLogo,
    "apache": ApacheLogo,
    "nginx": NginxLogo,
    "jenkins": JenkinsLogo,
  };

  const _getLogoComponent = (logoName) => {
    const LogoComponent = _logoComponents[logoName];
    return <LogoComponent className="mr-6"/>
  };

  return (
    <section className="text-gray-600 body-font w-full py-5">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          BUSINESS
        </h2> */}
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{props.title}</span>
        </h1>
        <div className="flex flex-row mt-3">
          {props.logo.map((logoName) => (
            _getLogoComponent(logoName)
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-5">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </section>
  );
}
