drop table if exists users;

create table users
(
    user_id serial primary key,
    full_name varchar(24),
    email text,
    password text
);