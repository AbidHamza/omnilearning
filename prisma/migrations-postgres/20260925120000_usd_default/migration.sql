-- Devise de référence : le dollar US. Adaptive Pricing (Stripe) convertit au Checkout.
ALTER TABLE "Course" ALTER COLUMN "currency" SET DEFAULT 'usd';
ALTER TABLE "CourseDraft" ALTER COLUMN "currency" SET DEFAULT 'usd';
ALTER TABLE "Purchase" ALTER COLUMN "currency" SET DEFAULT 'usd';

-- Catalogue et brouillons en cours : même montant, libellé en dollars.
-- Les achats gardent leur devise d'origine, c'est ce qui a été encaissé.
UPDATE "Course" SET "currency" = 'usd' WHERE "currency" = 'eur';
UPDATE "CourseDraft" SET "currency" = 'usd' WHERE "currency" = 'eur';
