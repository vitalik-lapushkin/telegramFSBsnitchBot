create or replace procedure increase_rating(user_id integer)
language sql
begin
    (select rating from bot.users where id = user_id) current_rating;
    update bor.users set rating = current_rating + 1 where id = user_id;
end;