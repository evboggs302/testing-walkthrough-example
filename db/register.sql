insert into users(full_name, email, password)
values
($1, $2, $3);

select full_name, email from users
where email = $2;