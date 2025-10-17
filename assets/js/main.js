(function(){
  // Seed may be provided by the test harness. If not present, fall back to 'default'.
  const seed = typeof window.seed !== 'undefined' ? window.seed : 'default';
  document.title = `Sales Summary ${seed}`;

  // CSV data provided as a data URI. The first line is the header 'sales'.
  const csvText = "sales\n120.50\n340.75\n89.25\n450.00\n275.30";
  const csvUrl = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvText);

  async function loadAndSum(url){
    try {
      const res = await fetch(url);
      const text = await res.text();
      const lines = text.trim().split(/\r?\n/);
      // Skip header then parse numbers
      const nums = lines
        .slice(1)
        .map(l => parseFloat(l.trim()))
        .filter(n => !isNaN(n));
      const total = nums.reduce((a,b)=>a+b,0);
      return total;
    } catch (e){
      console.error(e);
      return 0;
    }
  }

  loadAndSum(csvUrl).then(total => {
    const el = document.getElementById('total-sales');
    if (el) {
      el.textContent = total.toFixed(2);
    }
  });
})();