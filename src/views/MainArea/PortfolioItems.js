import React, { useState} from "react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
function PortfolioItem(props) {
  const [isShown, setIsShown] = useState(false);
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);
  const closeModal = () => {
    setIsShown(false);
  };
  const handleClick = () => {
    return setIsShown(!isShown);
  };
  const dynammicModalClass = () => (isShown ? { display: "block" } : "");

  const { item } = props;
  const shareUrl = "http://github.com";
  const title = "GitHub";
  return (
    <div>
      <div className="our-project">
        <div className="img">
          <a className="port-card">
            <img src={item.image} alt="portfolio-1" className="img-fluid" />
           
            <div className="card-hover">
              <div className="card-info">
                <h3>project title</h3>
                <div className="icons">
                  <span
                    onClick={() => {
                      setLike(true);
                    }}
                  >
                    {" "}
                    <i className={`fas fa-heart fa-2x ${like ? "liked" : ""}`}></i>
                  </span>

                  <span onClick={handleClick}>
                    <i
                      className="fas fa-eye fa-2x transition"
                      data-view="view"
                    ></i>
                  </span>
                  <span
                    onClick={() => {
                      setShare(true);
                    }}
                  >
                    {" "}
                    <i
                      className="fas fa-share-alt fa-2x transition"
                      data-share="share"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="title py-4">
          <h4 className="text-uppercase">{item.category}</h4>
          <span className="text-secondary">Latest, Portfolio</span>
        </div>
      </div>
      {isShown && (
              <div
                className="modal "
                style={dynammicModalClass()}
                id="channelModal"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="dialog"
                  tabindex="-1"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12">
                          <button
                            onClick={closeModal}
                            style={{ color: "#000" }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <img src={item.image} alt="react-hooks" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {share && (
              <div
                className="modal"
                style={{ display: "block"}}
                id="channelModal"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-light">
                        Share with.....
                      </h5>

                      <button
                        onClick={() => {
                          setShare(false);
                        }}
                        style={{ color: "#000" }}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 ">
                          <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className="share-button"
                          >
                            <FacebookIcon size={35} round />
                          </FacebookShareButton>
                          <FacebookMessengerShareButton
                            url={shareUrl}
                            appId="521270401588372"
                            className="share-button"
                          >
                            <FacebookMessengerIcon size={35} round />
                          </FacebookMessengerShareButton>
                          <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className="share-button"
                          >
                            <TwitterIcon size={35} round />
                          </TwitterShareButton>
                          <TelegramShareButton
                            url={shareUrl}
                            title={title}
                            className="share-button"
                          >
                            <TelegramIcon size={35} round />
                          </TelegramShareButton>
                          <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=":: "
                            className="share-button"
                          >
                            <WhatsappIcon size={35} round />
                          </WhatsappShareButton>
                          <LinkedinShareButton
                            url={shareUrl}
                            className="share-button"
                          >
                            <LinkedinIcon size={35} round />
                          </LinkedinShareButton>

                          <EmailShareButton
                            url={shareUrl}
                            subject={title}
                            body="body"
                            className="share-button"
                          >
                            <EmailIcon size={35} round />
                          </EmailShareButton>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button className="btn-lg btn btn-primary">
                        <span style={{ color: "#fff" }}>
                          <i className="fa fa-phone mr-1 " />
                          <a href="tel:+254795389894" style={{ color: "#fff" }}>
                            +254-795393894{" "}
                          </a>
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          setShare(false);
                        }}
                        type="button"
                        className="btn btn-lg"
                      >
                        No Thanks
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}
export default PortfolioItem;
