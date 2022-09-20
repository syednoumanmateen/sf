import { Component } from '@angular/core';

declare const window: any
declare const document: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: Array<any>;
  desktop: any;
  about: Array<any>;
  pillars: Array<any>;
  superFranchise: Array<any>;
  advantages1: Array<any>;
  advantages2: Array<any>;

  languages = [
    { lbl: 'English', key: 'en', translate: 'English' },
    { lbl: 'Hindi', key: 'hi', translate: 'हिंदी' },
    { lbl: 'Kannada', key: 'kn', translate: 'ಕನ್ನಡ' },
    { lbl: 'Malayalam', key: 'ml', translate: 'മലയാളം' },
    { lbl: 'Marathi', key: 'mr', translate: 'मराठी' },
    { lbl: 'Tamil', key: 'ta', translate: 'தமிழ்' },
    { lbl: 'Telgu', key: 'te', translate: 'తెలుగు' }
  ]

  constructor() {
    this.header = this.getHeader();
    this.desktop = this.isDesktop();
    this.about = this.getAbout();
    this.pillars = this.getPillars();
    this.superFranchise = this.getSuperFranchise();
    this.advantages1 = this.getAdvantages1();
    this.advantages2 = this.getAdvantages2();
  }

  isDesktop() {
    return window.innerWidth >= 1025 ? true : false
  }

  getHeader() {
    return [
      {
        icon: './assets/images/header/one_hub.svg',
        title: 'One Hub'
      },
      {
        icon: './assets/images/header/Multiple Brands.svg',
        title: 'Multiple Brands Categories'
      },
      {
        icon: './assets/images/header/distribution.svg',
        title: 'One Distribution Partner'
      }
    ];
  }

  getAbout() {
    return [
      {
        icon: './assets/images/about/warehouses.svg',
        value: 8,
        title: 'Warehouses'
      },
      {
        icon: './assets/images/about/stores.svg',
        value: '20,000+',
        title: 'Stores(kiranas)'
      },
      {
        icon: './assets/images/about/pincode.svg',
        value: '4000+',
        title: 'Pincode'
      },
      {
        icon: './assets/images/about/states.svg',
        value: '9+',
        title: 'States'
      },
      {
        icon: './assets/images/about/transactions-Day.svg',
        value: '30,000',
        title: 'Transactions/Day'
      },
      {
        icon: './assets/images/about/disticts.svg',
        value: 265,
        title: 'Districts'
      },
      {
        icon: './assets/images/about/daily_footfall.svg',
        value: '1.5 million',
        title: 'Daily footfall'
      },
      {
        icon: './assets/images/about/smart_super_store.svg',
        value: '25+',
        title: 'Smart Super Store'
      },
      {
        icon: './assets/images/about/digital_india_hub.svg',
        value: 3,
        title: 'Digital India Hub'
      }
    ];
  }

  getPillars() {
    return [
      {
        icon: './assets/images/pillars/technology.svg',
        title: 'Technology',
        descp: 'App Ecosystem Powered by technology'
      },
      {
        icon: './assets/images/pillars/payments.svg',
        title: 'Payments',
        descp: 'All Orders are 100% Prepaid'
      },
      {
        icon: './assets/images/pillars/logistics.svg',
        title: 'Logistics',
        descp: 'Reach Beyond Traditionl Distribution Networks'
      },
      {
        icon: './assets/images/pillars/marketing.svg',
        title: 'Marketing',
        descp: 'Retail Assets & Rural Marketing'
      }
    ];
  }

  getSuperFranchise() {
    return [
      {
        icon: './assets/images/super/godown_space.svg',
        text: 'Godown space of ',
        sqft: '500-1000 sqft'
      },
      {
        icon: './assets/images/super/ambassador.svg',
        text: 'Ambassador within the neighbourhood'
      },
      {
        icon: './assets/images/super/surrounding_areas.svg',
        text: 'Ability to reach retailers/ customers in surronding areas '
      },
      {
        icon: './assets/images/super/investment.svg',
        text: 'Investment of',
        sqft: 'Rs 1 lac to 5 lacs'
      },
      {
        icon: './assets/images/super/progressive_thinking.svg',
        text: 'Progressive thinking entrepeneur & adoption of echnology '
      }
    ]
  }

  getAdvantages1() {
    return [
      {
        icon: './assets/images/advantages/inventory_management.svg',
        title: 'Inventory Management',
        descp: 'Digitized inventory Management to have an accurate Stock Report'
      },
      {
        icon: './assets/images/advantages/retailer_management.svg',
        title: 'Retailer Management',
        descp: 'Understanding &amp; Fulfilling the retailers needs at a click of a button'
      },
      {
        icon: './assets/images/advantages/order_management.svg',
        title: 'Order Management',
        descp: 'Manage Orders from Processing to Delivery hassle free'
      },
      {
        icon: './assets/images/advantages/campaign_management.svg',
        title: 'Campaign Management',
        descp: 'Reach the right audience at the right time'
      },
      {
        icon: './assets/images/advantages/manpower_management.svg',
        title: 'Manpower Management',
        descp: 'New manpower workflow of distribution'
      }
    ]
  }

  getAdvantages2() {
    return [
      {
        icon: './assets/images/advantages/gst.svg',
        title: 'GST',
        descp: 'All the required reports to file GST readily available at a click of a button.'
      },
      {
        icon: './assets/images/advantages/account_statement.svg',
        title: 'Account Statement',
        descp: 'Accessing account statements of any time period & anywhere.'
      },
      {
        icon: './assets/images/advantages/lending.svg',
        title: 'Lending',
        descp: 'Best Plans to Support our Partner to increase business & be successful'
      },
      {
        icon: './assets/images/advantages/dashboard.svg',
        title: 'Dashboard',
        descp: 'Manage everything around you via a simple Dashboard'
      }
    ];
  }

  changeLanguage() {
    try {
      document.getElementById('sk-google-lang-modal').style.display = "block";
    } catch (e) {

    }
  }
}
