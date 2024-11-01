package sep.aps.spring.booksmanagmt_app;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @PostMapping("/books")
    public Book erstelleBuch(@RequestBody Book book){
        return book;
    }

}
