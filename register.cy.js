describe('registertest1',function(){
  it('register the from', ()=>{
      cy.visit('http://127.0.0.1:5500/index.html?textnames=faizan&lastnames=shahid&full_father_name=shahid+nazir&personal_address=1119+street+pakistan&sex=male&sex=male&sex=Female&City=Islamabad&Course=Automation#');
      cy.get('#textname').type('Faizan');
      cy.get('#lastname').type('Shahid');
      cy.get('#fathername').type('Shahid Nazir');
      cy.get('#personaladdress').type('House 119');

      cy.get('[type="radio"]').check('male');
      cy.get('input[type="checkbox"]').check(['Programming','Testing'])
      cy.get("#inlineFormSelectPref")
      .select("Islamabad");
      cy.get("#inlineFormSelect")
      .select("Automation");

      cy.get('.btn').click({multiple:true});
      
  
  });
  
  });

  describe('registertest2',function(){
    it('register the from', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html?textnames=faizan&lastnames=shahid&full_father_name=shahid+nazir&personal_address=1119+street+pakistan&sex=male&sex=male&sex=Female&City=Islamabad&Course=Automation#');
        cy.get('#textname').type('Muhammad');
        cy.get('#lastname').type('Mustafa');
        cy.get('#fathername').type('Shahid Nazir');
        cy.get('#personaladdress').type('House 119-c 3123Road');
  
        cy.get('[type="radio"]').check('male');
        cy.get('input[type="checkbox"]').check(['Programming'])
        cy.get("#inlineFormSelectPref")
        .select("Rwp");
        cy.get("#inlineFormSelect")
        .select("Automation");
  
        cy.get('.btn').click({multiple:true});
        
    
    });
    
    });

    describe('registertest3',function(){
      it('register the from', ()=>{
          cy.visit('http://127.0.0.1:5500/index.html?textnames=faizan&lastnames=shahid&full_father_name=shahid+nazir&personal_address=1119+street+pakistan&sex=male&sex=male&sex=Female&City=Islamabad&Course=Automation#');
          cy.get('#textname').type('Osama');
          cy.get('#lastname').type('Rafique');
          cy.get('#fathername').type('Shahid Nazir');
          cy.get('#personaladdress').type('House 119-c 3123Road Diamond Bazar');
    
          cy.get('[type="radio"]').check('male');
          cy.get('input[type="checkbox"]').check(['Programming'])
          cy.get("#inlineFormSelectPref")
          .select("Rwp");
          cy.get("#inlineFormSelect")
          .select("Automation");
    
          cy.get('.btn').click({multiple:true});
          
      
      });
      
      });