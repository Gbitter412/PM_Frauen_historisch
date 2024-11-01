package sep.aps.spring.booksmanagmt_app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class FooBarConfiguration {

    @Bean("foo")
    public String foo() {
        return "foo";
    }

    @Primary
    @Bean("bar")
    public String bar() {
        return "bar";
    }
}
