import React, { Component, lazy, Suspense } from "react";
//https://react-icons.github.io/react-icons

const InstagramIco = lazy(() => import("./icons/instagram")); //fa
const LinkedinIco = lazy(() => import("./icons/linkedin"));
const PlayIco = lazy(() => import("./icons/play"));
const PauseIco = lazy(() => import("./icons/pause"));

const DownloadIco = lazy(() => import("./icons/download")); //Hi
const MailIco = lazy(() => import("./icons/mail"));
const MenuIco = lazy(() => import("./icons/menu"));

const MoreIco = lazy(() => import("./icons/more")); //Fi

const UpIco = lazy(() => import("./icons/up")); //Io
const DownIco = lazy(() => import("./icons/down"));
const BackIco = lazy(() => import("./icons/back"));
const ForwardIco = lazy(() => import("./icons/forward"));
const CloseIco = lazy(() => import("./icons/close")); //Io5

class Icon extends Component {
  iconSwitch(icon) {
    switch (icon) {
      case "back":
        return <BackIco />;
      case "forward":
        return <ForwardIco />;
      case "down":
        return <DownIco />;
      case "up":
        return <UpIco />;
      case "instagram":
        return <InstagramIco />;
      case "linkedin":
        return <LinkedinIco />;
      case "download":
        return <DownloadIco />;
      case "mail":
        return <MailIco />;
      case "menu":
        return <MenuIco />;
      case "more":
        return <MoreIco />;
      case "play":
        return <PlayIco />;
      case "pause":
        return <PauseIco />;
      case "close":
        return <CloseIco />;
      default:
        return null;
    }
  }
  render() {
    return <Suspense>{this.iconSwitch(this.props.icon)}</Suspense>;
  }
}

export default Icon;
