package com.besolution.backend.configs;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource getDataSource() {
        final DriverManagerDataSource dataSourceBuilder = new DriverManagerDataSource();
        dataSourceBuilder.setDriverClassName("org.sqlite.JDBC");
        dataSourceBuilder.setUrl("jdbc:sqlite:./db.sqlite");

        return dataSourceBuilder;
    }

}