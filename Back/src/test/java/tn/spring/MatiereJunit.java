package tn.spring;
import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest; 
import tn.spring.entity.Matiere;
import tn.spring.repository.MatiereRepo;
import tn.spring.service.MatiereService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class MatiereJunit {

    @Autowired
    MatiereService ms;

    @Autowired
    MatiereRepo mr;

    Matiere m1 = new Matiere(1,"eee" ,2);
    Matiere m2 = new Matiere(2,"bbb" ,3);
    @Test
    @Order(1)
    public void testaddProdiut() {
        Matiere mateire=  ms.add(m1);
        Assertions.assertEquals(mateire.getCoef(), mateire.getNom());
    }

    @Test
    @Order(2)
    public void testRetrieveAll() {
        List<Matiere> list = ms.show();
        Assertions.assertEquals(list.size(), list.size());
    }

   /* @Order(3)
    @Test
    public void testRetrieveUser() {
        Produit produitRetrieved = produitService.retrieveProduit(1L);
        Assertions.assertEquals(1L, produitRetrieved.getIdProduit().longValue());
    }*/

    @Test

    @Order(3)
    public void testModify()   {

       Matiere mu  = ms.update(m2,1);
       Assertions.assertEquals(m2.getCoef(), m1.getCoef());
    }

    @Test

    @Order(4)
    public void testDeleteProduit() {

      //  produitService.deleteProduit(6L); 
    	mr.delete(m1);
    	ms.show();
       
    }
}
