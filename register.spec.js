describe('register',function(){
it('register the from', ()=>{
    cy.visit('http://127.0.0.1:5500/index.html?textnames=faizan&lastnames=shahid&full_father_name=shahid+nazir&personal_address=1119+street+pakistan&sex=male&sex=male&sex=Female&City=Islamabad&Course=Automation#');
    cy.get('#textname'),type(Faizan);
    cy.get('btn btn-primary'),click();
    cy.url().should('include','secure');

});

});