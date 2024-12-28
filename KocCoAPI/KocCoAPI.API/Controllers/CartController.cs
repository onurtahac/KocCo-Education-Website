﻿using KocCoAPI.Application.DTOs;
using KocCoAPI.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace KocCoAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "User")]
    public class CartController : ControllerBase
    {
        private readonly IUserAppService _userAppService;

        public CartController(IUserAppService userAppService)
        {
            _userAppService = userAppService;
        }

        [HttpPost("add-to-cart")]
        public async Task<IActionResult> AddToCart([FromQuery] int packageId)
        {
            var email = User.FindFirst(ClaimTypes.Name)?.Value;

            if (string.IsNullOrEmpty(email))
            {
                return Unauthorized();
            }

            if (packageId <= 0)
            {
                return BadRequest(new { message = "Cart id can't find." });
            }

            try
            {
                await _userAppService.AddToCartAsync(email, packageId);
                return Ok(new { message = "Package added to cart successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }

        [HttpGet("view-cart")]
        public async Task<IActionResult> ViewCart()
        {
            var email = User.FindFirst(ClaimTypes.Name)?.Value;

            if (string.IsNullOrEmpty(email))
            {
                return Unauthorized();
            }

            try
            {
                var cart = await _userAppService.GetCartDetailsAsync(email);
                return Ok(cart);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }

        [HttpPost("purchase-cart")]
        public async Task<IActionResult> PurchaseCart([FromBody] string cardDetails)
        {
            var email = User.FindFirst(ClaimTypes.Name)?.Value;

            if (string.IsNullOrEmpty(email))
            {
                return Unauthorized();
            }

            if (string.IsNullOrEmpty(cardDetails))
            {
                return BadRequest(new { message = "Email and CardDetails are required." });
            }

            try
            {
                var result = await _userAppService.PurchaseCartAsync(email, cardDetails);
                return Ok(new { message = result });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}
