
window.NC = window.NC || {};
NC.util = {
  toDateStr(iso){
    try{
      const d=new Date(iso);
      const y=d.getFullYear();
      const m=(d.getMonth()+1).toString().padStart(2,'0');
      const day=d.getDate().toString().padStart(2,'0');
      return `${y}-${m}-${day}`;
    }catch(e){ return iso; }
  },
  badge(text){ return `<span class="badge">${text}</span>`; }
};
