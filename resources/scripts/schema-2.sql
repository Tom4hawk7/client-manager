UPDATE Service
SET service_type = 'DS'
WHERE service_type = 'session';

UPDATE Service
SET service_type = 'PT'
WHERE service_type = 'travel';

UPDATE Service
SET service_type = 'TH'
WHERE service_type LIKE '%Telehealth%';

UPDATE Service
SET service_type = 'CA'
WHERE service_type LIKE '%Cancellation%';

UPDATE Service
SET service_type = 'NF'
WHERE service_type LIKE '%Non-Face-To-Face%';

UPDATE Service
SET service_type = 'RR'
WHERE service_type LIKE '%NDIA Requested Report%';

UPDATE Service
SET service_type = 'PT'
WHERE service_type LIKE '%Provider Travel%';

