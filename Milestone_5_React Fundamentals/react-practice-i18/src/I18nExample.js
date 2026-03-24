import { useTranslation } from "react-i18next";

function I18nExample() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{t("welcome")}</h2>

      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>

      <button onClick={() => i18n.changeLanguage("es")}>
        Spanish
      </button>
    </div>
  );
}

export default I18nExample;