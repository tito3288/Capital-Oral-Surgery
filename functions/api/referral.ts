interface ReferralRequestContext {
  request: Request;
}

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

export const onRequestPost = async ({ request }: ReferralRequestContext) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid form submission." }, 400);
  }

  if (String(formData.get("website") ?? "").trim()) {
    return jsonResponse({ ok: true });
  }

  const requiredFields = [
    "patientFirstName",
    "patientLastName",
    "referringDoctorFirstName",
    "referringDoctorLastName",
    "referringDoctorTelephone",
  ];
  const hasMissingRequiredField = requiredFields.some(
    (field) => !String(formData.get(field) ?? "").trim(),
  );

  if (hasMissingRequiredField) {
    return jsonResponse({ ok: false, error: "Required fields are missing." }, 400);
  }

  // TODO: Resend — securely deliver the referral and wire attachments.
  return jsonResponse({ ok: true });
};
