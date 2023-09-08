import Banner, { BannerProps } from '../banner/banner';

interface GridBannersProps {
  banners: BannerProps[];
}

export async function GridBanners(props: GridBannersProps) {
  const { banners } = props;
  const mainBanner = banners[0];
  const secondBanner = banners[1];
  const thirdBanner = banners[2];

  return (
    <div className="row ">
      <div className="col-lg-8">
        <Banner
          image={mainBanner.image}
          title={mainBanner.title}
          link={mainBanner.link}
          size="big"
        />
      </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-sm-6 col-lg-12">
            {[secondBanner, thirdBanner].map((banner, index) => (
              <Banner
                image={banner.image}
                title={banner.title}
                link={banner.link}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
