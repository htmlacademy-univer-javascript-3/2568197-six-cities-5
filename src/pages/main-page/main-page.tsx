import React, { useState } from 'react';
import OffersList from '../../components/offer-list/offer-list';
import { Offer } from '../../types/offer';
import { Header } from '../../components/header/header';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';

interface MainProps {
  offersCount: number;
  offers: Offer [];
}

const CITIES_TITLES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const Main: React.FC<MainProps> = (props) => {

  const { offersCount, offers } = props;
  const [activeCityIndex, setActiveCityIndex] = useState<number>(Math.floor(CITIES_TITLES.length / 2));

  return (
    <div className="page page--gray page--main">
      { Header }
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs citiesTitles={CITIES_TITLES} activeCityIndex={activeCityIndex} setActiveCityIndex={setActiveCityIndex} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offersCount} places to stay in Amsterdam`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section>
                <Map offers={offers} activeCityTitle={CITIES_TITLES[activeCityIndex]} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
