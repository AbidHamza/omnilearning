import { auth } from "@/lib/auth";
import { saveScormPackage } from "@/lib/scorm-upload";

// Upload d'un paquet SCORM (.zip) : dézippage serveur, lecture du manifeste,
// fichiers servis en statique. Même garde de rôle que /api/upload.
export async function POST(req: Request) {
  const session = await auth();
  const role = session?.user?.role;
  if (!session?.user?.id) {
    return new Response(JSON.stringify({ error: "Non authentifié." }), { status: 401 });
  }
  if (role !== "INSTRUCTOR" && role !== "ADMIN") {
    return new Response(JSON.stringify({ error: "Réservé aux formateurs." }), { status: 403 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ error: "Aucun fichier." }), { status: 400 });
  }

  try {
    const result = await saveScormPackage(file);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Échec de l'upload SCORM.";
    return new Response(JSON.stringify({ error: msg }), { status: 400 });
  }
}
