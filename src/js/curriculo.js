document.getElementById('btn-download').addEventListener('click', function () {
    const el = document.getElementById('curriculo');
    const opt = {
      margin: 0,
      filename: 'Curriculo-Felippe-Nobre.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };
    html2pdf().set(opt).from(el).save();
  });
