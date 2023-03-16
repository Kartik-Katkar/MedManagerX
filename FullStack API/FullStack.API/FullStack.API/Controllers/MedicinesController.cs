using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public MedicinesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMedicines()
        {
           var medicines = await _fullStackDbContext.Medicines.ToListAsync();

            return Ok(medicines);
        }


        [HttpPost]
        public async Task<IActionResult> AddMedicine([FromBody]Medicine medicineRequest) 
        {
            medicineRequest.Id = Guid.NewGuid();

            await _fullStackDbContext.Medicines.AddAsync(medicineRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(medicineRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetMedicine([FromRoute]Guid id)
        {
          var medicine = await _fullStackDbContext.Medicines.FirstOrDefaultAsync(x => x.Id == id);
          if(medicine == null)
            {
                return NotFound();
            }
          return Ok(medicine);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateMedicine([FromRoute] Guid id, Medicine updateMedicineRequest)
        {
         var medicine =  await _fullStackDbContext.Medicines.FindAsync(id);

            if(medicine == null)
            {
                return NotFound();
            }
            medicine.Name = updateMedicineRequest.Name;
            medicine.Email = updateMedicineRequest.Email;
            medicine.Cost = updateMedicineRequest.Cost;
            medicine.Phone = updateMedicineRequest.Phone;
            medicine.Type = updateMedicineRequest.Type;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(medicine);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteMedicine([FromRoute] Guid id)
        {
            var medicine = await _fullStackDbContext.Medicines.FindAsync(id);

            if (medicine == null)
            {
                return NotFound();
            }
            _fullStackDbContext.Medicines.Remove(medicine);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(medicine);
        }
    }
}
