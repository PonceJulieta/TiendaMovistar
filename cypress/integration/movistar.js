const { softAssert, softExpect } = chai;
const movistarPage = require ('../pageObject/datosPage');
const movistarBuilder = require ('../builder/movistarBuilder');


describe('Casos de prueba', ()=>{
    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar')
    })

    it('CP001 - Visualizar intereses  - Interés.0', ()=>{
        const datosPage = new movistarPage();
        const bancosBuilder = new movistarBuilder().bancoCredicoop().build();
        const tarjetaBuilder = new movistarBuilder().tarjetaMastercard().build();
        const interesBuilder = new movistarBuilder().interescp001().build()

        datosPage.getequipo().eq(2).trigger('mouseover').click();
        datosPage.getfinanciacion();
        datosPage.getbancos().select(bancosBuilder.banco);
        datosPage.gettarjeta().select(tarjetaBuilder.tarjeta);
        datosPage.getcuotas().eq(4).contains(interesBuilder.interes)
    })

    it('CP002 - Buscar Samsung en filtro - filtro.Samsung', () =>{
        const datosPage = new movistarPage()
        const marcaBuilder = new movistarBuilder().marcaSamsung().build();
        const urlBuilder = new movistarBuilder().samsungurl().build()
        datosPage.getfiltros();
        datosPage.getfiltrar().contains(marcaBuilder.samsung).click();
        cy.url().should('include', urlBuilder.samsung)
        //cy.url().then((url) => { 
        //    expect(url).to.includes(cypress.env('samsung_url'));
        //})
        datosPage.getmarca().eq(1).trigger('mouseover');
        datosPage.getmarca().each(($el) =>{
            expect($el).to.have.text(marcaBuilder.samsung)
        })
    })

    it('CP003 - Buscar con lupa equipos LG - Marca.LG', () => {
        const datosPage = new movistarPage()
        const marcaBuilder = new movistarBuilder().marcaLG().build();

        datosPage.getlupa()
        datosPage.getinput().type(marcaBuilder.lg, '{enter}');
        datosPage.getmarca().eq(1).trigger('mouseover');
        cy.screenshot();
        datosPage.getmarca(marcaBuilder.lg).each(($el) =>{
            expect($el).to.have.text(marcaBuilder.lg);
        })

    })

    it('CP004 - Busqueda de ayuda - Sección.ayuda - pregunta.facturación', ()=>{
        const datosPage = new movistarPage()
        const ayudaBuilder = new movistarBuilder().seccionAyuda().build()

        datosPage.getmenu().contains(ayudaBuilder.ayuda).click();
        datosPage.getpregunta().type('facturación {enter}')
    })

    it('CP005 - Visualizar estilos en la página principal de la tienda -Sección.Tienda - Fuentes.TelefonicaWeb-Bold.TelefonicaWeb-Regular.Helvetica Neue.Verdana.Arial.sans-serif - BannerFuente.TelefonicaWeb-Hand.40px',  () => {
        const datosPage = new movistarPage()
        //const bold = new movistarBuilder().fontBold().build()
        //const fonts = new movistarBuilder().fontFamilies().build()
        //const banner = new movistarBuilder().estiloBanner().build()

        //datosPage.getconNegrita().should('have.css', 'font-family', datosPage.getFuentes())
        datosPage.getsinNegrita().should('not.have.css', 'font-family', datosPage.getFuentes(0))
        datosPage.getbanner().should('have.css', 'font-family', datosPage.getestiloBanner(0))
    })

    it('CP006 - Comprobar planes de TV - Perfil.Productos y servicios - Sección.Planes de TV - planes.Minimo3', () => {
        const datosPage = new movistarPage()
        const planesBuilder= new movistarBuilder().planesTV().build()

        datosPage.getmenu().find('span').eq(2).click()
        datosPage.getmenu().contains(planesBuilder.planes).click()
        
        cy.url().then((url) => {
            expect(url).to.includes(Cypress.env("planesTV_url"));
        })
        
        datosPage.getprecioPlanes().then(($div) => {
            expect($div).to.have.length.of.at.most(3)
        })
    })

    it('CP007  Verificar contenido en menú - Perfil.Negocios', () => {
        const datosPage = new movistarPage()
        const negocioBuilder= new movistarBuilder().negocio().build()
        const menuesBuilder = new movistarBuilder().noenNegocio().build()
        const listaMenu = new movistarBuilder().listaMenu().build()

        datosPage.getmenuHeader().contains(negocioBuilder.negocios).click({force:true});
        cy.url().then((url) => {
            expect(url).to.includes(Cypress.env('negocio_url'));
        });

        datosPage.getmenu().then(() =>{
            expect(listaMenu.listaMenu).to.exist
        })

        datosPage.getarrayProductos().each(($list) => {
            expect($list).not.includes(menuesBuilder.listaNo)
        });
    })

})