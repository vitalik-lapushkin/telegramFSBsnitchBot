create or replace function fsb_snitch_bot.increase_rating(user_id integer) returns integer as $$
declare current_rating integer;
begin
    current_rating := (select rating from fsb_snitch_bot.users where id = user_id);
    update fsb_snitch_bot.users set rating = current_rating + 1 where id = user_id;
    return (select rating from fsb_snitch_bot.users where id = user_id);
end;
$$ language plpgsql;

create or replace function fsb_snitch_bot.decrease_rating(user_id integer) returns integer as $$
declare current_rating integer;
begin
    current_rating := (select rating from fsb_snitch_bot.users where id = user_id);
    if current_rating != 0
    then
        update fsb_snitch_bot.users set rating = current_rating - 1 where id = user_id;
    end if;
    return (select rating from fsb_snitch_bot.users where id = user_id);
end;
$$ language plpgsql;