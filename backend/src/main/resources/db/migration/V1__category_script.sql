-- -----------------------------------------------------
-- Categories
-- -----------------------------------------------------

SELECT 1 AS baseline;

INSERT INTO category(name, description, image, logo,date_create,date_update)
	VALUES ('Foods', 'Chef with diligence finishing dish on plate', 'food', 'fas fa-solid fa-pot-food',now(),now());

    INSERT INTO category(name, description, image, logo,date_create,date_update)
	VALUES ('Cold Drinks', 'Group of Soft drinks bottles. Bottled beverage', 'colddrinks', 'fas fa-solid fa-wine-bottle',now(),now());

    INSERT INTO category(name, description, image, logo,date_create,date_update)
	VALUES ('Hot Drinks', 'Group of  Coffee and Tea ,milks','hotdrinks', 'fas fa-solid fa-mug-hot',now(),now());

    INSERT INTO category(name, description, image, logo,date_create,date_update)
	VALUES ('Sweets', 'Group of konafa in a tray with pistachio', 'sweets', 'fa-solid fa-cookie-bite',now(),now());

    INSERT INTO category(name, description, image, logo,date_create,date_update)
	VALUES ('Extras', 'Group of Sweet and Salty Snacks, Perfect ', 'extras', 'fa-solid fa-road-spikes',now(),now());

