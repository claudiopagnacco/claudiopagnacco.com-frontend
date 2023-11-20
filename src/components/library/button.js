import React, { lazy, Suspense, Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../performance/loading";
const Icon = lazy(() => import("./icon"));

class Button extends Component {
  structure(label, icon, position) {
    if (label && icon) {
      if (!position || position === "right") {
        return (
          <>
            <label className={this.props.variant + " iconRight"}>
              {this.props.label}{" "}
              <Suspense fallback={<Loading />}>
                <Icon icon={this.props.icon} />
              </Suspense>
              <div></div>
            </label>
          </>
        );
      } else {
        return (
          <>
            <label className={this.props.variant + " iconLeft"}>
              <Suspense fallback={<Loading />}>
                <Icon icon={this.props.icon} />{" "}
              </Suspense>{" "}
              {this.props.label}
              <div></div>
            </label>
          </>
        );
      }
    } else {
      if (label) {
        return (
          <>
            <label className={this.props.variant}>
              {this.props.label}
              <div></div>
            </label>
          </>
        );
      } else if (icon) {
        return (
          <>
            <label className={this.props.variant + " icon"}>
              <Suspense fallback={<Loading />}>
                {" "}
                <Icon icon={this.props.icon} />
              </Suspense>
              <div></div>
            </label>
          </>
        );
      }
    }
  }

  render() {
    if (this.props.to) {
      if (this.props.icon === "download") {
        return (
          <>
            <Link
              className="Button"
              to={this.props.to}
              target={this.props.blank ? "_blank" : ""}
              download
            >
              {this.structure(
                this.props.label,
                this.props.icon,
                this.props.iconPosition
              )}
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link
              className="Button"
              to={this.props.to}
              target={this.props.blank ? "_blank" : ""}
            >
              {this.structure(
                this.props.label,
                this.props.icon,
                this.props.iconPosition
              )}
            </Link>
          </>
        );
      }
    } else {
      return (
        <div className="Button">
          {this.structure(
            this.props.label,
            this.props.icon,
            this.props.iconPosition
          )}
        </div>
      );
    }
  }
}

export default Button;
