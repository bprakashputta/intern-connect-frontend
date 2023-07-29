import "../../pages.css/about.css";
import Footerbar from "../../components/Bars/Footerbar";
function about() {
  return (
    <div>
      <section class="banner-area relative" id="home">
        <div class="">
          <div class="head">
            <div className="before-lineup">
              <h1 className="lineUp">
                About <span class="red">Us</span>
              </h1>
            </div>
            <hr class="redline" />
          </div>
        </div>
      </section>
      <section>
        <div className="displayer">
          <div className="image-display"></div>
          <div className="description">
            <h1 className="about-title">About</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur atque perferendis, laudantium quod architecto velit ad
              officiis facere eveniet in fuga fugiat delectus rerum doloribus
              quos consectetur unde, expedita, quibusdam corporis impedit quia
              sequi aliquid sit. Ducimus labore molestias odio nam
              necessitatibus laboriosam vero saepe enim nobis. Repudiandae
              quidem, sint earum dolorum consequuntur dignissimos excepturi
              mollitia omnis aliquid, corporis, unde!
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Dicta doloribus veniam impedit, enim!</li>
              <li>Quod, facilis cupiditate repellat voluptas.</li>
              <li>Quae impedit id maxime fugiat.</li>
              <li>Esse aut iste dolor. In.</li>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="displayer">
          <div className="description">
            <h1 className="about-title">Our Team</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur atque perferendis, laudantium quod architecto velit ad
              officiis facere eveniet in fuga fugiat delectus rerum doloribus
              quos consectetur unde, expedita, quibusdam corporis impedit quia
              sequi aliquid sit. Ducimus labore molestias odio nam
              necessitatibus laboriosam vero saepe enim nobis. Repudiandae
              quidem, sint earum dolorum consequuntur dignissimos excepturi
              mollitia omnis aliquid, corporis, unde!
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Dicta doloribus veniam impedit, enim!</li>
              <li>Quod, facilis cupiditate repellat voluptas.</li>
              <li>Quae impedit id maxime fugiat.</li>
              <li>Esse aut iste dolor. In.</li>
            </p>
          </div>
          <div className="image-display"></div>
        </div>
      </section>

      <section class="m-5">
        <div class="service">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 pb-40 header-text">
              <h2>Why InternConnect</h2>
              <p> Lorem ipsum dolor</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-user"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-license"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-phone"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-rocket"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-diamond"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service">
                <h4>
                  <span class="lnr lnr-bubble"></span> Lorem ipsum
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur atque perferendis, laudantium quod architecto velit
                  ad officiis facere eveniet in fuga fugiat delectus rerum
                  doloribus quos consectetur unde, sequi aliquid sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerbar />
    </div>
  );
}

export default about;
