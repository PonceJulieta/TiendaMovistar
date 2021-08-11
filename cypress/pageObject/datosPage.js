export default class movistarPage{

    equipo = '.product-name a';
    financiacion = '.price-info a';
    bancos = '#selectBank';
    tarjeta = '#selectCardByBank';
    tablaCuotas = '.bold-tr';
    abrirFiltros = '.btn-group';
    filtrarPor = '.group-filter-wrapper';
    marca = '.product-brand a';
    siguiente = '.icon-angle-right';
    lupa= '.waves-effect.dnavigation__search-button.js-desktop-search-button';
    inputBuscador = '#myInput';
    menu = '[role="menubar"]';
    pregunta = '.twitter-typeahead';
    textoSinNegrita= '.movistar-blue-no-bold';
    textoconNegrita = '#installments-text';
    banner = '.banner-info';
    subMenuProductos= 'dnavigation__link';
    planesPrecios = '.price.text42';
    planesNombre= '.gb p';
    menuHeader= '.navigation-secondary';
    listaProductos = '.dnavigation__submenu__2 li>a';
    fuentes = ['TelefonicaWeb-Bold, TelefonicaWeb-Regular, "Helvetica Neue", Verdana, Arial, sans-serif'];
    estiloBanner = ['TelefonicaWeb-Hand', '40px'];


    constructor(){}

    getequipo(){
        return cy.get(this.equipo)
    };

    getfinanciacion(){
        return cy.get(this.financiacion).click()
    };

    getbancos(){
        return cy.get(this.bancos);
    }

    gettarjeta(){
        return cy.get(this.tarjeta)
    }

    getcuotas(){
        return cy.get(this.tablaCuotas)
    }

    getfiltros(){
        return cy.get(this.abrirFiltros).eq(0).click()
    }

    getfiltrar(){
        return cy.get(this.filtrarPor)
    }

    getmarca(){
        return cy.get(this.marca)
    }

    getsiguiente(){
        return cy.get(this.siguiente)
    }

    getlupa(){
        return cy.get(this.lupa).click()
    }

    getinput(){
        return cy.get(this.inputBuscador)
    }

    getmenu(){
        return cy.get(this.menu)
    }

    getpregunta(){
        return cy.get(this.pregunta)
    }

    getmenuchilden(){
        return cy.get(this.menuchildren)
    }

    getsinNegrita(){
        return cy.get(this.textoSinNegrita)
    }

    getconNegrita(){
        return cy.get(this.textoconNegrita)
    }

    getbanner(){
        return cy.get(this.banner)
    }

    getmenuProductos(){
        return cy.get(this.subMenuProductos)
    }
    
    getprecioPlanes(){
        return cy.get(this.planesPrecios)
    }

    getnombrePlan(){
        return cy.get(this.planesNombre)
    }

    getmenuHeader(){
        return cy.get(this.menuHeader)
    }

    getarrayProductos(){
        return cy.get(this.listaProductos)
    }

    getFuentes(){
        return this.fuentes
    }

    getestiloBanner(){
        return this.estiloBanner
    }


}